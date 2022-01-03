import React, { useEffect, useState } from "react";
import './main.less';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRepos } from "../actions/repos";
import Repo from "./repo/Repo";
import { setCurrentPage } from "../../reducers/reposReducer";
import { createPages } from "../../utils/pagesCreator";

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const currentPage = useSelector(state => state.repos.currentPage);
    const perPage = useSelector(state => state.repos.perPage);
    const isFetchError = useSelector(state => state.repos.isFetchError);
    const totalCount = useSelector(state => state.repos.totalCount);
    const [searchValue, setSearchValue] = useState("");
    const pagesCount = Math.ceil(totalCount / perPage);
    const pages = [];

    createPages(pages, pagesCount, currentPage);

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])
    //debugger;

    const searchHandler = () => {
        dispatch(setCurrentPage(1));
        dispatch(getRepos(searchValue, currentPage, perPage));
    }

    return (
        <div>
            {
            isFetchError &&
                <div class="alert alert-danger" role="alert">
                    Произошла ошибка! Пожалуйста обновите страницу!
                </div>
                
            }

            <div className="search">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="input repo name" className="search-input" />
                <button onClick={() => searchHandler()} className="search-btn">Search</button>
            </div>

            {
                isFetching === false
                    ?
                    repos.map(repo => <Repo repo={repo} />)
                    :
                    <div className="fetching">
                    </div>
            }

            <div className="pages">
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPage == page ? "current-page" : "page"}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>
        </div>
    )
}

export default Main;
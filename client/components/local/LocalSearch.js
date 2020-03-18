import React, {useState} from 'react';
import Input from "../base/Input";
import './LocalSearch.css';
import {Link} from "react-router-dom";

function LocalSearch() {
    const [searchResults, setSearchResults] = useState([]);

    function searchAndShowResults(request) {
        API.search({name: request, count: 10}).then((response) => {
            setSearchResults(response);
        });
    }

    return (
        <div className="searchRelative">
            <Input placeholder={LanguageManager.getString("type_model")}
                   onValueChange={(event) => searchAndShowResults(event.target.value)}/>
            <div className="searchResults">
                {
                    searchResults.map((item, id) =>
                        <Link to={"/train/"+item.vid} key={id}>
                            <div className="searchTrain">
                                <div className={"searchTrainStatus searchTrainStatus" + item.state}/>
                                <div className="searchTrainDescription">
                                    <div className="searchTrainTrain">{item.num}</div>
                                    <div className="searchTrainModel">{item.dname}</div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

export default LocalSearch;
import React from 'react';
import './LeftSideSearch.css';
import SearchIcon from '@material-ui/icons/Search';

function LeftSideSearch() {
	return (
		<div className="leftSideSearch">
			<div className="leftSideSearch__item">
				<SearchIcon />
                <form>
                <input type="text" placeholder="Search or start new chat" />
                </form>
				
			</div>
		</div>
	);
}

export default LeftSideSearch;

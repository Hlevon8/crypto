import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    const { handlePaginationClick, page, totalPages } = props;

    return (
        <div className="Pagination">
            <button 
                className="Pagination-button"
                disabled={page === 1}
                onClick={() => handlePaginationClick('prev')}
            >
                &larr;
            </button>

                <span className="Pagination-info">
                    page <strong>{page}</strong> of <strong>{totalPages}</strong>
                </span>

            <button 
                className="Pagination-button"
                disabled={page === totalPages}
                onClick={() => handlePaginationClick('next')}
            >
                &rarr;
            </button>
        </div>
    )
}
export default Pagination;
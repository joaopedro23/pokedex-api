import React from "react";


const Pagination = (props) => {
    const {page, totalPages, onLetfClick, onRightClick} = props

    return (
        <div className="pagination-container">

        <button onClick={onLetfClick}> <div> ◀ </div> </button>
        <div>{page} de {totalPages} </div>
        <button onClick={onRightClick}> <div>▶</div> </button>

        </div>
    )

}
 
export default Pagination
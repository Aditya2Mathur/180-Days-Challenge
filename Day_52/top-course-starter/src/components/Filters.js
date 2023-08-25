import React from "react";

const Filters = ({ filterData }) => {
    return <div>
        {filterData.map((data) => {
            
                <button ket={data.id}>
                    {data.title};
                </button>
           
        })}
    </div>
}

export default Filters;
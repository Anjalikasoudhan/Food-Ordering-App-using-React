export const Shimmer=()=>{
    return(
        <div className="shimmer-container">
            {/*Create 20 fake card*/}
            {Array(20).fill("").map((e,index)=>{
                return(
                <div key={index} className="shimmer-card">
                     <div className="shimmer-img"></div>
                     <div className="shimmer-card-content">
                        {/* Shimmer for Name */}
                        <div className="shimmer-line name"></div>
                        {/* Shimmer for Rating */}
                        <div className="shimmer-line rating"></div>
                        {/* Shimmer for Cuisines */}
                        <div className="shimmer-line cuisines"></div>
                        {/* Shimmer for Cost */}
                        <div className="shimmer-line cost"></div>
                     </div>
                  
                </div>
                );
            })}
        </div>
    );
};
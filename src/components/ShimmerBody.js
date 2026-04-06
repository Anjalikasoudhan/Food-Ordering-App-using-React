export const Shimmer = () => {
    return (
        <div className="shimmer-page">

            {/* Hero skeleton */}
            <div className="shimmer-hero">
                <div className="shimmer-block sh-tag"></div>
                <div className="shimmer-block sh-title"></div>
                <div className="shimmer-block sh-subtitle"></div>
                <div className="shimmer-search-row">
                    <div className="shimmer-block sh-input"></div>
                    <div className="shimmer-block sh-btn"></div>
                    <div className="shimmer-block sh-btn"></div>
                    <div className="shimmer-block sh-btn"></div>
                </div>
                <div className="shimmer-block sh-label"></div>
            </div>

            {/* Cards grid skeleton */}
            <div className="shimmer-container">
                {Array(8).fill("").map((_, i) => (
                    <div className="shimmer-card" key={i}>
                        <div className="shimmer-img"></div>
                        <div className="shimmer-body">
                            <div className="shimmer-line wide"></div>
                            <div className="shimmer-line mid"></div>
                            <div className="shimmer-line short"></div>
                            <div className="shimmer-line short"></div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};
export const MenuShimmer = () => {
    return (
        <div className="menu-shimmer-page">

            {/* Hero banner skeleton */}
            <div className="menu-shimmer-hero">
                <div className="menu-shimmer-hero-left">
                    <div className="shimmer-block msh-tag"></div>
                    <div className="shimmer-block msh-title"></div>
                    <div className="shimmer-block msh-cuisine"></div>
                    <div className="shimmer-block msh-meta"></div>
                    <div className="msh-pills-row">
                        <div className="shimmer-block msh-pill"></div>
                        <div className="shimmer-block msh-pill"></div>
                        <div className="shimmer-block msh-pill"></div>
                    </div>
                </div>
                <div className="shimmer-block msh-hero-img"></div>
            </div>

            {/* Menu section */}
            <div className="menu-shimmer-content">
                <div className="shimmer-block msh-section-label"></div>
                <div className="menu-shimmer-grid">
                    {Array(6).fill("").map((_, i) => (
                        <div className="menu-shimmer-card" key={i}>
                            <div className="menu-shimmer-card-body">
                                <div className="shimmer-block msh-dot"></div>
                                <div className="shimmer-block msh-item-title"></div>
                                <div className="shimmer-block msh-item-title short"></div>
                                <div className="shimmer-block msh-price"></div>
                                <div className="shimmer-block msh-rating-pill"></div>
                                <div className="shimmer-block msh-desc"></div>
                                <div className="shimmer-block msh-desc short"></div>
                                <div className="shimmer-block msh-add-btn"></div>
                            </div>
                            <div className="shimmer-block msh-item-img"></div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};
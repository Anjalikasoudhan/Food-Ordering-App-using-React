/**
 * FoodSathi brand logo — pure SVG, no external files needed.
 * Renders a styled "Food Saathi" wordmark with a fork-spoon icon.
 */
const Logo = () => (
  <svg
    width="180"
    height="40"
    viewBox="0 0 180 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="logo-svg"
  >
    {/* Fork icon */}
    <g transform="translate(2, 4)">
      <path
        d="M8 2 v10 M4 2 v6 a4 4 0 0 0 8 0 v-6 M8 12 v18 a2 2 0 0 1-2 2"
        stroke="#fac775"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </g>

    {/* "Food" text */}
    <text
      x="24"
      y="27"
      fontFamily="'Playfair Display', serif"
      fontWeight="700"
      fontSize="22"
      fill="#f0ebff"
    >
      Food
    </text>

    {/* "Saathi" text in gold */}
    <text
      x="82"
      y="27"
      fontFamily="'Playfair Display', serif"
      fontWeight="700"
      fontSize="22"
      fill="#fac775"
    >
      Saathi
    </text>
  </svg>
);

export default Logo;

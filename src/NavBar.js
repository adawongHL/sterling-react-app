export default function NavBar() {
    return (
    <nav>
        <a href="/" className="site-title">Home</a>

        <ul>
            <li>
                <a href="/courseinfo">Course Info</a>
            </li>

            <li>
                <a href="/lectures">Lectures</a>
            </li>
        </ul>
    </nav>
    )
}
const Header = () => {
  return <div className="bg-red-400">
    <h1 className="text-2xl">Welcome to My Website</h1>
    <nav className="flex justify-between items-center">
        <a className="hover:no-underline">Home</a>
        <a className="hover:no-underline">About</a>
        <a className="hover:no-underline">Contact</a>
    </nav>
  </div>;
};

export default Header;

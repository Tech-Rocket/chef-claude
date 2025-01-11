import chefClaudeIcon from "../assets/images/chef-claude-icon.png";
const Header = () => {
  return (
    <header className="h-32 py-2 border-b border-gray-300 bg-white flex items-center justify-center gap-5 shadow-md">
      <img src={chefClaudeIcon} alt="icon" className="h-20" />
      <h1 className="text-4xl">Chef Claude</h1>
    </header>
  );
};

export default Header;

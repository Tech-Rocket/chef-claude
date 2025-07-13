import ChefClaudeIcon from "../../public/images/chef-claude-icon.png";
const Header = () => {
  return (
    <header className="h-32 py-2 border-b border-gray-300 bg-white flex items-center justify-center gap-5 shadow-md">
      <img src={ChefClaudeIcon} alt="icon" className="h-20" />
      <h1 className="text-3xl font-semibold">Chef Claude</h1>
    </header>
  );
};

export default Header;

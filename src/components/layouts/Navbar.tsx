import logo from '../../logo.svg';

export const Navbar = () => {
  return (
		<div className="flex items-center w-full h-fit bg-[#def5f1] p-4">
			<img src={logo} className="App-logo w-16 h-fit min-h-[unset]" alt="logo" />
			<span>Navbar</span>
		</div>
  );
  
};

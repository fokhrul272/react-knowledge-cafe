import profile from '../../assets/images/profile.png';


const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
           <h1 className='text-4xl bg-red-300'>knowledge cafe</h1> 
           <img src={profile} alt="" />
        </header>
    );
};

export default Header;



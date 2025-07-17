function Header() {
 const headerStyle = {
   padding: '20px',
   backgroundColor: '#f0f0f0',
   textAlign: 'center',
   borderBottom: '1px solid #ddd'
 };

 return (
   <header style={headerStyle}>
     <h2>🏛️ Acompanhe seu Parlamentar</h2>
   </header>
 );
}

export default Header;
const Navbar = ({ show }) => {
    return (
        <div className={show ? 'sidenav.active' : 'sidenav'}>
            <h2 className='info'>Informacje o projekcie</h2>
            <h3 className='info'>Projekt stworzył Kamil Górak ze swoimi kurwami ktore idzie ruchac bzykac bzykanko</h3>
        </div>
    )
}
export default Navbar
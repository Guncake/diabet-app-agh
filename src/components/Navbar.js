const Navbar = ({ show }) => {
    return (
        <div className={show ? 'sidenav.active' : 'sidenav'}>
            <h2 className='info'>Informacje o projekcie</h2>
            <h4 className='info'>
            <br />Projekt powstał w ramach przedmiotu: Projektowanie aplikacji webowych. 
            <br />Autorzy: Kamil Górak, Karolina Barczyk, Jakub Kwater, Anna Ceglarz, Kamil Hosaja, Natalia Wasik, Bartosz Kozioł, Justyna Tokarz     
            <br />Projekt powstał w oparciu o artykuł: 
            <br />Wubishet, B. L., Harris, M. L., Forder, P. M., Acharya, S. H., & Byles, J. E. (2019). Predictors of 15-year survival among Australian women with diabetes from age 76-81.
            <br />Kod źródłowy: https://github.com/Guncake/diabet-app-agh
            <br />Ankieta ma charakter informacyjny a nie charakter medyczny.</h4>
        </div>
    )
}
export default Navbar
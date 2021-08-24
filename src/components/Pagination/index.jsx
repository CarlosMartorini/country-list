const Pagination = ({ countryPerPage, totalCountries, paginate }) => {
    
    const pageNumber = [];

    for(let index = 1; index <= Math.ceil(totalCountries / countryPerPage); index++) {
        pageNumber.push(index);
    }

    return (
        <nav>
            <ul>
                {
                    pageNumber.map((number) => (
                        <li key={number}>
                            <a onClick={() => paginate(number)} href='!#'>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Pagination;
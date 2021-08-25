import { PageUl } from './styles';

const Pagination = ({ countryPerPage, totalCountries, paginate }) => {
    
    const pageNumber = [];

    for(let index = 1; index <= Math.ceil(totalCountries / countryPerPage); index++) {
        pageNumber.push(index);
    }

    return (
        <nav>
            <PageUl>
                {
                    pageNumber.map((number) => (
                        <li key={number}>
                            <a onClick={() => paginate(number)} href='!#'>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </PageUl>
        </nav>
    );
};

export default Pagination;
import Pagination from 'react-bootstrap/Pagination'

const PaginationComponent = (props) => {
    let active = props.currentPage;
    let items = [];
    for (let number = 1; number <= 15; number++) {
        items.push(
            <Pagination.Item 
                key={number} 
                active={number === active}
                onClick={() => props.setCurrentPage(number)}
            >
                {number}
            </Pagination.Item>,
        )
    }

    return (
        <div>
            <Pagination size="lg">
                {items}
            </Pagination>
        </div>
    )
}

export default PaginationComponent
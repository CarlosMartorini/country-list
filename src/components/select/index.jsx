const SelectSearch = ({ rest }) => {

    return (
        <select 
            {...rest}
        >
            <option value='region'>Region</option>
            <option value='capital'>Capital</option>
            <option value='country' default>Country</option>
            <option value='callingcode'>Calling Code</option>
        </select>
    );
};

export default SelectSearch;
function SearchBar({ onSearch }: { onSearch: (value: string) => void }) {
    return (
    <input
        type="text"
        placeholder="Busque suas categorias"
        className="w-full max-w-md p-2 border border-gray-300 rounded shadow-sm mb-6 cursor-pointer"
        onChange={(e) => onSearch(e.target.value)}
    />
    );
}

export default SearchBar;
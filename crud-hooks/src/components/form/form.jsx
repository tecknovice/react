import './form.css'

export default function Form({ item, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">title</label>
            <input type="text" id="title" name="title" placeholder="title.." value={item.title} onChange={handleChange} />

            <label htmlFor="content">content</label>
            <input type="text" id="content" name="content" placeholder="content.." value={item.content} onChange={handleChange} />

            <input type="submit" value="Submit" />
        </form>
    )
}
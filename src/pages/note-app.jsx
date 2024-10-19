import Button from "../components/Elements/Button";

const NoteAppPage = () => {
    const tekan = (e) => {
        e.preventDefault();

        console.log('test');
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-xs w-full">
                <form onSubmit={tekan}>
                    <Button type="submit">Tekan</Button>
                </form>
            </div>
        </div>
    )
}

export default NoteAppPage;
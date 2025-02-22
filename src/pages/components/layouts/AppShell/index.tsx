import Navbar from "../Navbar";

type AppShellProps = {
    children: React.ReactNode;
};


const AppShell = (props: AppShellProps) => {
    const { children } = props;

    return (
        <main>
            <Navbar />
            {children}
            <h1>Footer</h1>
        </main>
    );
}
export default AppShell;
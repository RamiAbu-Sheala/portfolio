export default function Home() {
    return (
        <div className="flex flex-row h-screen justify-between items-center">
            <div className="flex flex-col gap-8 max-w-max">
                <div className="text-3xl">
                    <h1>Hello There!</h1>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h1>I'm <span className="font-extrabold title-highlight">Rami Abu-sheala</span></h1>
                </div>
                <p>I’m a full-stack developer.<br/>I love creating front-end apps and websites,<br/>but also enjoy developing Java back-ends.</p>
            </div>
        </div>
    );
}
//
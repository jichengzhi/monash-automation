import Page from "../components/Page.tsx";

let arr: number[] = [];

for(let i = 0; i < 20; i++) arr.push(i);

export default function Home() {
    return <>
        <Page>
            {arr.map(_ => <p className='p-10'>
                Amet incididunt proident aliqua nulla nostrud consequat nostrud qui eu. Sint enim elit esse nulla ex eiusmod commodo dolore occaecat labore aute nostrud. Enim eiusmod laborum ad enim anim qui amet amet nulla cupidatat nostrud fugiat qui anim esse. Ex dolore esse quis quis qui aute est velit est cillum nisi dolor deserunt. Aliquip tempor cupidatat fugiat. Adipisicing proident aliqua nisi id veniam ipsum pariatur non reprehenderit occaecat ex exercitation eu sint. Veniam aliquip adipisicing ut aliquip culpa aliquip pariatur consectetur ex dolore excepteur anim nisi esse. Veniam laboris qui qui.
            </p>)}
        </Page>
    </>;
}
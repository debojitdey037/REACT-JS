export default function card(props){
    console.log(props.myage);
    
    return(
        <>
        <div>
           <h1>This card is functional components</h1>
           <h2>{props.myage}</h2>
        </div>
        
        </>
    )
}
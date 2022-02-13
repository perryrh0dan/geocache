export default function Home({seconds}: { seconds: number}) {
  if (seconds >= 30) {
    return (
      <h1 className="text-3xl font-bold underline">
        Hello Silvia
      </h1>
    )    
  } else {
    return (
      <h1 className="text-3xl font-bold underline">
        Hello Thomas!
      </h1>
    )
  }
}

export async function getServerSideProps(context: any) {
  const now = new Date()
  
  return {
    props: {
      seconds: now.getSeconds()
    }, // will be passed to the page component as props
  }
}
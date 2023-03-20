import Link from "next/link"
import Image from "next/image"

export const CastList = ({ cast }) => {
  return (
    <div >
      {cast.map(member => (
        <Link href="/member/[id]" as={`/member/${member.id}`} key={member.id}>
            <p>{member.name}</p>
        </Link>
      ))
      }
    </div>
  )
}
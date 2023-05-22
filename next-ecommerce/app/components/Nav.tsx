'use client'

import { Session } from "next-auth"
import { signIn } from "next-auth/react"
import Image from "next/image"
export default function Nav({ user }: Session) {
    return (
        <nav className="flex justify-between items-center py-8">
            <h1>
                Re-styled
            </h1>
            <ul>

                {!user && (
                    <div>
                        <li className="bg-teal-700 text-white py-2 px-4 rounded-md">
                            <button onClick={() => signIn()}>signIn</button>
                        </li>
                    </div>
                )}
                {user && (
                    <li >
                        <Image src={user?.image as string} alt={user?.name as string} width={48} height={48}
                            className="rounded-full"
                        />
                    </li>
                )}

            </ul>
        </nav>
    )
}


//BUTTON CSS FOR SIGN IN
// <li className=" px-4">
//                         <button className={styles.btn} type="button" onClick={() => signIn()}>
//                             <p>sign In</p>
//                             <div className={styles.containerstars}>
//                                 <div className={styles.stars}></div>
//                             </div>

//                             <div className={styles.glow}>
//                                 <div className={styles.circle}></div>
//                                 <div className={styles.circle}></div>
//                             </div>
//                         </button>
//                     </li>
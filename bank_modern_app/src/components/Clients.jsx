import { clients } from "../constants"
import styles from '../style'

const Clients = () => {
  return (
   <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {clients.map((cleint) => {
            <div key={client.id} className={`flex-1`}> 


            </div>
          })}
      </div>
   </section>
  )
}

export default Clients
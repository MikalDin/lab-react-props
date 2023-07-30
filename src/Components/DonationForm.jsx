import { donations } from "../App";
export default function DonationForm() {
  return (
    <>
    <section className="donation">
  <h3> you could be a donor <span class = "secondary">#{ donations.length +1 }!</span></h3>
  <form>
    <label htmlFor="name"
    >Name<input
    id="name"
    name="name"
    type="text"
    placeholder="Your name..."/></label
   ><label htmlFor="caption"
   >Caption<input
   id="caption"
   name="caption"
    type="text"
    placeholder="Add a brief message..."/></label>
  <label> htmlFor="amount"
    >Amount>input
    id ="amount"
    name="amount"
    type="number"
    placeholder="0" /></label>
    <button>Donate!</button>
       </form>
      </section>
     </>
    );
  )
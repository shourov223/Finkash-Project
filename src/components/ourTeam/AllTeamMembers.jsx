import { CommonHeading } from "../service/SocialFinancial"
import person_one from "../../assets/person_one.jpg"
import person_two from "../../assets/person_two.jpg"
import person_three from "../../assets/person_three.jpg"
import person_four from "../../assets/person_four.jpg"
import person_five from "../../assets/person_five.jpg"
import person_six from "../../assets/person_six.jpg"
import person_seven from "../../assets/person_seven.jpg"
import person_eight from "../../assets/person_eight.jpg"
import person_nine from "../../assets/person_nine.jpg"
import { MemberCard } from "../home/TeamMembers"


const AllTeamMembers = () => {
    const memberDetails = [
        {
            image: person_one,
            name: "Arnav Gillespie",
            title: "finkash CEO",
            des: "Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."
        },
        {
            image: person_two,
            name: "Edward Richardson",
            title: "finkash Manager",
            des: "Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."
        },
        {
            image: person_three,
            name: "Leslie Gibson",
            title: "finkash Leagal advaisor",
            des: "Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."
        },
        {
            image: person_four,
            name: "Zak Thompson",
            title: "finkash advisers",
            des: "Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."
        },
        {
            image: person_five,
            name: "Christopher Daniel",
            title: "finkash advisers",
            des: "Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."
        },
        {
            image: person_six,
            name: "Andrew Kimberly",
            title: "finkash advisers",
            des: "Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."
        },
        {
            image: person_seven,
            name: "William Margaret",
            title: "finkash advisers",
            des: "Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."
        },
        {
            image: person_eight,
            name: "Lisa Christopher",
            title: "finkash advisers",
            des: "Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."
        },
        {
            image: person_nine,
            name: "Michelle Susan",
            title: "finkash advisers",
            des: "Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."
        }
    ]
    return (
        <section className='pt-[150px]'>
            <div className="container">
                <CommonHeading designText={"Team members"} title={"Professional financial advisers"} des={"Donec molestie lacus vel massa malesuada, vitae accumsan nunc malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar sem."} btnText={"View All Team"} />
                <div className="grid grid-cols-3 gap-x-[30px] gap-y-[40px]">
                    {
                        memberDetails.map((member, index) => {
                            return <MemberCard key={index} img={member.image} title={member.name} text={member.title} des={member.des} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default AllTeamMembers
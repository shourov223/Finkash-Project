import { Outfit } from "next/font/google"


const outfit = Outfit({
    weight: ["400", "500", "600", "700"]
})

const ConditionDetails = () => {
    return (
        <section className={`py-[80px] md:py-[120px] lg:py-[150px] ${outfit.className}`}>
            <div className="container">
                <center>
                    <h2 className="text-black text-[28px] md:text-[35px] lg:text-[40px] leading-[36px] md:leading-[45px] lg:leading-[52px] font-bold pb-6 md:pb-8 lg:pb-10">INTRODUCTION</h2>
                    <p className="text-sm md:text-base text-[#555555] leading-6 md:leading-7 pb-[60px] md:pb-[80px] lg:pb-[100px] max-w-full md:max-w-[90%] lg:max-w-[80%]">Praesent magna urna, interdum vehicula placerat aliquet, tempus eget nisi. Mauris sed malesuada nunc, et hendrerit dolor. Nullam lacus orci, pretium sit amet hendrerit ac, condimentum vel ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla bibendum, magna a porttitor aliquet, nunc ex hendrerit erat, in porta eros mi sed urna. Morbi rutrum sodales orci, eget accumsan nisi consectetur nec. Vestibulum rhoncus urna et lorem faucibus, eu pharetra est consequat. Sed porttitor pulvinar justo et blandit. Nulla placerat accumsan neque eu molestie. Integer cursus sit amet nulla eget molestie. Nunc nisi tortor.</p>
                </center>
                <div className="flex flex-col gap-[50px] md:gap-[70px] lg:gap-[94px]">
                    <TextPart heading={"1. construction Registration"} details={"Praesent magna urna, interdum vehicula placerat aliquet, tempus eget nisi. Mauris sed malesuada nunc, et hendrerit dolor. Nullam lacus orci, pretium sit amet hendrerit ac, condimentum vel ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla bibendum, magna a porttitor aliquet, nunc ex hendrerit erat, in porta eros mi sed urna. Morbi rutrum sodales orci, eget accumsan nisi consectetur nec. Vestibulum rhoncus urna et lorem faucibus, eu pharetra est consequat. Sed porttitor pulvinar justo et blandit. Nulla placerat accumsan neque eu molestie. Integer cursus sit amet nulla eget molestie. Nunc nisi tortor, elementum iaculis odio in, faucibus dictum felis. Donec vulputate enim at urna tristique, ut scelerisque leo tempor. Curabitur tristique a ipsum id pretium."} />

                    <TextPart heading={"2. Use of the Service"} details={"Magna urna, interdum vehicula placerat aliquet, tempus eget nisi. Mauris sed malesuada nunc, et hendrerit dolor. Nullam lacus orci, pretium sit amet hendrerit ac, condimentum vel ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla bibendum, magna a porttitor aliquet, nunc ex hendrerit erat, in porta eros mi sed urna. Morbi rutrum sodales orci, eget accumsan nisi consectetur nec. Vestibulum rhoncus urna et lorem faucibus, eu pharetra est consequat. Sed porttitor pulvinar justo et blandit. Nulla placerat accumsan neque eu molestie. Integer cursus sit amet nulla eget molestie. Nunc nisi tortor, elementum iaculis odio in, faucibus dictum felis. Donec vulputate enim at urna tristique, ut scelerisque leo tempor. Curabitur tristique a ipsum id pretium. Praesent scelerisque ligula et urna tempus elementum."} />

                    <TextPart heading={"3. Payment and Subscription"} details={"Condimentum vel porttitor a, laoreet in nisi. Vivamus sodales nunc in sem blandit viverra. Ut consequat malesuada porta. Nam libero neque, fermentum id rutrum nec, tempus sit amet dui. Donec pretium leo eget justo sollicitudin, et tincidunt ipsum ornare. Maecenas quis turpis sit amet lorem tincidunt faucibus ac ut metus. Vestibulum mattis sed eros at pharetra. Vestibulum mollis massa dui, vitae maximus augue tincidunt at. Quisque in lacinia eros. Etiam id posuere dolor, sed bibendum ante. Curabitur et porta magna. Ut sodales elit ac vulputate tincidunt. Pellentesque id augue ac ex efficitur dapibus."} />

                    <TextPart heading={"4. Termination"} details={"Porttitor a laoreet in nisi. Vivamus sodales nunc in sem blandit viverra. Ut consequat malesuada porta. Nam libero neque, fermentum id rutrum nec, tempus sit amet dui. Donec pretium leo eget justo sollicitudin, et tincidunt ipsum ornare. Maecenas quis turpis sit amet lorem tincidunt faucibus ac ut metus. Vestibulum mattis sed eros at pharetra. Vestibulum mollis massa dui, vitae maximus augue tincidunt at. Quisque in lacinia eros. Etiam id posuere dolor."} />

                    <TextPart heading={"5. Communications"} details={"Laoreet in nisi Vivamus sodales nunc in sem blandit viverra. Ut consequat malesuada porta. Nam libero neque, fermentum id rutrum nec, tempus sit amet dui. Donec pretium leo eget justo sollicitudin, et tincidunt ipsum ornare. Maecenas quis turpis sit amet lorem tincidunt faucibus ac ut metus. Vestibulum mattis sed eros at pharetra. Vestibulum mollis massa dui, vitae maximus augue tincidunt at. Quisque in lacinia eros. Etiam id posuere dolor, sed bibendum ante. Curabitur et porta magna. Ut sodales elit ac vulputate tincidunt. Pellentesque id augue ac ex efficitur dapibus."} />

                    <TextPart heading={"6. Privacy Policy"} details={"Laoreet in nisi. Vivamus sodales nunc in sem blandit viverra. Ut consequat malesuada porta. Nam libero neque, fermentum id rutrum nec, tempus sit amet dui. Donec pretium leo eget justo sollicitudin, et tincidunt ipsum ornare. Maecenas quis turpis sit amet lorem tincidunt faucibus ac ut metus. Vestibulum mattis sed eros at pharetra. Vestibulum mollis massa dui, vitae maximus augue tincidunt at. Quisque in lacinia eros. Etiam id posuere dolor, sed bibendum ante. Curabitur et porta magna. Ut sodales elit ac vulputate tincidunt. Pellentesque id augue ac ex efficitur dapibus."} />
                </div>
            </div>
        </section>
    )
}

const TextPart = ({ heading, details }) => {
    return (
        <div>
            <h4 className="text-[#1B1B1B] text-[22px] md:text-[26px] lg:text-[30px] leading-[28px] md:leading-[30px] lg:leading-[33px] font-semibold">{heading}</h4>
            <p className="text-[#555555] text-sm md:text-base leading-6 md:leading-7 pt-6 md:pt-7 lg:pt-9 pl-[20px] md:pl-[30px] lg:pl-[38px]">{details}</p>
        </div>
    )
}
export default ConditionDetails
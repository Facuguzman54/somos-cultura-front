import Image from "next/image"
import { CustomButton } from "./CustomButton"


export const EventCard = () => {
    return (
        <div className="w-full p-4 bg-white rounded-lg shadow-md relative">
            <div className="absolute right-0 top-0 my-5 mx-5 bg-slate-50 p-1 rounded-lg" ><strong>Category</strong></div>
            <Image width={0} height={0} className="min-w-full h-40 object-cover rounded-t-lg" alt="Card Image" src="https://via.placeholder.com/150"/>
                <div className="p-4">
                    <h2 className="text-xl  font-semibold">Beautiful Card</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet tellus ornare tincidunt.</p>
                    <div className="flex justify-between items-center mt-4">
                        <CustomButton label="Learn More"/>
                    </div>
                </div>
        </div>
    )
}

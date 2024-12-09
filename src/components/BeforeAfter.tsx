import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "../ui/Image-comparision";
import before from "../assets/before.jpg";
import after from "../assets/after.jpg";

export default function BeforeAfter() {
  return (
    <div className="bg-black w-[500px] ">
      <div className="flex justify-around text-white font-bold py-2 ">
        <p>Before</p>
        <p className="text-yellow-500">After</p>
      </div>
      <ImageComparison
      className='  aspect-[16/10] rounded-lg border border-zinc-200 dark:border-zinc-800'
      enableHover
      springOptions={{
        bounce: 0.3,
      }}
    >
      <ImageComparisonImage
        src={after}
        alt='Motion Primitives Dark'
        position='left'
        className="object-contain"
      />
      <ImageComparisonImage
        src={before}
        alt='Motion Primitives Light'
        position='right'
         className="object-contain"
      />
      <ImageComparisonSlider className='w-0.5 bg-white/30 backdrop-blur-sm' />
    </ImageComparison>
    </div>
  );
}

import { IoAnalytics } from 'react-icons/io5'
import { GoTrash } from 'react-icons/go'
import { TbUsersGroup } from 'react-icons/tb'
import { IoMdShareAlt } from 'react-icons/io'

const statusColors = {
  draft: 'bg-[#7616EC1F] text-black',
  shared: 'bg-[#16EC2F1F] text-black',
}

//now survey item divided equally in 5 parts
export function SurveyItem({ name, lastOpened, status, responses }) {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      {/* Name + Status */}
      <div>
        <div className="font-medium text-purple">{name}</div>
        <div className="text-xs text-gray-500">{`Last opened ${lastOpened}`}</div>
      </div>

      {/* \Status Badge */}
      <div className={`rounded-full px-4 py-1 capitalize ${statusColors[status]}`}>{status}</div>

      {/* Responses */}
      <div className="flex items-center gap-2 text-sm font-medium text-purple">
        <TbUsersGroup className="size-4" />
        <span>{responses} Responses</span>
      </div>

      {/* Analyze */}
      <div className="flex items-center gap-2 text-sm font-medium text-purple">
        <IoAnalytics className="h-4 w-4" />
        <span>Analyze</span>
      </div>

      {/* Share */}
      <div className="flex items-center gap-3">
        <IoMdShareAlt className="size-5 cursor-pointer text-black hover:opacity-70" />
        <GoTrash className="c size-4 cursor-pointer text-red-500 hover:text-red-700" />
      </div>
    </div>
  )
}

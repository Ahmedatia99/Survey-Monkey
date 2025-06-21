import { useState } from 'react'
import { CiFileOn } from 'react-icons/ci'
import { RiHome5Line } from 'react-icons/ri'
import { IoIosArrowDown } from 'react-icons/io'
import { Button } from '@/components/ui/button.js'
import { SurveyItem } from '@/components/features/dashborad/SurveyItem.jsx'

const FILTER_OPTIONS = [
  { key: 'status', label: 'Status', options: ['All', 'Active', 'Inactive'] },
  { key: 'owner', label: 'Owner', options: ['All', 'Teams', 'Users'] },
  { key: 'sortBy', label: 'Sort By', options: ['Recently', 'Name'] },
]

const MOCK_SURVEYS = [
  {
    id: 1,
    name: 'Survey name',
    lastOpened: '1 week',
    status: 'draft',
    responses: 29,
  },
  {
    id: 2,
    name: 'Survey name',
    lastOpened: '2 days',
    status: 'shared',
    responses: 29,
  },
  {
    id: 3,
    name: 'Survey name',
    lastOpened: '3 weeks',
    status: 'draft',
    responses: 29,
  },
  {
    id: 4,
    name: 'Survey name',
    lastOpened: '1 week',
    status: 'shared',
    responses: 50,
  },
  {
    id: 5,
    name: 'Survey name',
    lastOpened: '4 days',
    status: 'shared',
    responses: 290,
  },
]

export default function Dashboard() {
  return (
    <div className="bg-green-40 container mx-auto px-6">
      <div className="grid grid-cols-[170px_1fr] gap-10">
        {/* Sidebar */}
        <aside className="rounded-tr-[40px] bg-[#F4F4F4] p-4 pt-10">
          <div className="flex h-5 items-center gap-5">
            <span className="h-full w-1 bg-purple after:content-['']"></span>

            <span className="flex items-center gap-3 text-purple">
              <RiHome5Line className="text-purple" />
              All surveys
            </span>
          </div>
        </aside>
        {/* Main Content */}
        <main className="grid gap-6">
          <DashboardHeader />
          <dev className="grid gap-2">
            {MOCK_SURVEYS.map((survey) => (
              <SurveyItem key={survey.id} {...survey} />
            ))}
          </dev>
        </main>
      </div>
    </div>
  )
}

function DashboardHeader() {
  return (
    <header className="grid gap-5">
      <h3 className="font-bold text-purple md:text-xl">Welcome Admin!</h3>
      <div className="grid grid-cols-[1fr_auto] place-content-center">
        <div className="flex items-center gap-10">
          {FILTER_OPTIONS.map(({ key, label, options }) => (
            <DropdownMenu key={key} label={label} options={options} />
          ))}
        </div>
        <Button
          className="text-white"
          style={{
            background: 'linear-gradient(320.2deg, #490F8F -0.43%, #7616EC 58.46%)',
          }}
        >
          <CiFileOn />
          <span> Create survey</span>
        </Button>
      </div>
    </header>
  )
}

//TODO => need enhancement to close it when click outside & pass the selected option to parent component
function DropdownMenu({ label, options }) {
  const [selected, setSelected] = useState(options[0])
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex cursor-pointer items-center space-x-1 capitalize text-[#848484] hover:text-black"
      >
        <span>
          {label}: {selected}
        </span>
        <IoIosArrowDown className="text-black" />
      </button>

      {open && (
        <div className="absolute z-10 mt-2 min-w-36 rounded border bg-white shadow-md">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setSelected(option)
                setOpen(false)
              }}
              role="option"
              aria-selected={selected === option}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

import React from 'react'

const Faq = () => {
  return (
    <div className='my-10'>
      <h1 className='text-center font-bold text-lg'>Frequently asked question</h1>
      <div className='border rounded-md bg-sky-100 w-3/5 my-5 items-center justify-center m-auto p-5'>
        <div className="max-w-md mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold mb-4 text-sky-500">What is the Pomodoro Technique?</h2>
          <p className="mb-4">The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique aims to improve productivity and focus by breaking work into short, focused intervals called "Pomodoros," separated by brief breaks. The name "Pomodoro" comes from the Italian word for "tomato," inspired by the tomato-shaped kitchen timer Cirillo initially used to track his work sessions.</p>
          <p className="mb-4">Here's how the Pomodoro Technique works:</p>
          <ol className="list-decimal list-inside mb-4">
            <li>Choose a task you want to complete.</li>
            <li>Set a timer for 25 minutes (one Pomodoro session).</li>
            <li>Work on the task uninterrupted until the timer goes off.</li>
            <li>Take a short break of 5 minutes to relax and recharge.</li>
            <li>Repeat the process, completing three more Pomodoro sessions followed by 5-minute breaks.</li>
            <li>After completing four Pomodoro sessions, take a longer break of 15-30 minutes.</li>
          </ol>
          <p>By breaking work into manageable intervals, the Pomodoro Technique helps maintain focus, reduce burnout, and increase efficiency. It also encourages better time estimation and prioritization by promoting a sense of urgency during the focused work sessions.</p>
        </div>


      </div>
      <div className='border rounded-md bg-sky-100 w-3/5 my-5 items-center justify-center m-auto p-5'>
      <div className="max-w-md mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-sky-500">Is Pomodoro helpful for ADHD?</h2>
      <p>The Pomodoro Technique can be helpful for some individuals with ADHD, as it addresses certain challenges associated with the condition, such as difficulty with time management, maintaining focus, and avoiding procrastination. By breaking tasks into short, focused intervals and incorporating regular breaks, the Pomodoro Technique provides a structured approach that may help keep individuals with ADHD engaged and on track.</p>
      <br />
      <p>However, it's important to note that ADHD affects individuals differently, and the effectiveness of the Pomodoro Technique may vary from person to person. Some people with ADHD may find the 25-minute work intervals too long or too short, requiring adjustments to the technique to suit their needs. Others may benefit from additional strategies, such as incorporating physical activity during breaks, creating a distraction-free work environment, or using tools like visual reminders or checklists.</p>
      </div>
      </div>

      <div className='border rounded-md bg-sky-100 w-3/5 my-5 items-center justify-center m-auto p-5'>
      <div className="max-w-md mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-sky-500">Why is a Pomodoro only 25 minutes?</h2>
      <p>The Pomodoro Technique uses 25-minute work intervals because it strikes a balance between maintaining focus and preventing burnout. The idea behind the 25-minute duration is to create a sense of urgency and encourage individuals to work efficiently without becoming overwhelmed or fatigued.</p>
      <br />
      <p>Francesco Cirillo, the creator of the Pomodoro Technique, experimented with different time intervals and found that 25 minutes was an effective duration for maintaining concentration and productivity. This interval is long enough to make progress on a task but short enough to prevent mental exhaustion and diminishing returns on effort.</p>
      <br />
      <p>Additionally, the 25-minute work intervals are followed by short breaks, which further contribute to preventing burnout and maintaining productivity. These breaks allow the mind to recharge and refocus, reducing the chances of becoming mentally fatigued or losing interest in the task at hand.

</p>
      </div>
      </div>

    </div>
  )
}

export default Faq
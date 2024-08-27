import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="flex items-center space-x-4">
          <Image src="/kika-icon.png" alt="Kika App Icon" width={64} height={64} className="rounded-xl" />
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Kika
          </h1>
        </div>
        <p className="text-2xl text-center max-w-2xl">
          Wake up with purpose. Create alarms with unique challenges that kickstart your day.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          <FeatureCard
            title="Custom Challenges"
            description="Design unique wake-up tasks to start your day right."
          />
          <FeatureCard
            title="Simple UI"
            description="Intuitive interface for effortless alarm management."
          />
          <FeatureCard
            title="Custom Sounds"
            description="Choose or upload your favorite wake-up tunes."
          />
          <FeatureCard
            title="Notifications"
            description="Flexible alert settings to suit your preferences."
          />
        </div>
        <Link
          className="rounded-full bg-blue-500 px-10 py-3 font-semibold text-white no-underline transition hover:bg-blue-600"
          href="https://apps.apple.com/app/kika"
          target="_blank"
        >
          Download on the App Store
        </Link>
      </div>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-lg">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="text-lg">{description}</div>
    </div>
  );
}

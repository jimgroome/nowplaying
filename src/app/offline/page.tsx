export default function OfflinePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl items-center justify-center px-6">
      <div className="rounded-lg border border-slate-300 bg-white p-8 text-center shadow-sm">
        <h1 className="mb-2 text-2xl font-bold text-slate-900">You are offline</h1>
        <p className="text-slate-600">
          Please reconnect to load the latest tracks.
        </p>
      </div>
    </main>
  );
}

import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SITE = {
  name: 'Nikky Fruits & Veggies',
  owner: 'Tafadzwa Kutsanzira',
  phone: '0777391997',
  email: 'nikkyfruitsveggies@gmail.com',
  whatsapp: '263777391997', // Zimbabwe format without +
}

const navLink = 'text-slate-700 hover:text-green-700 font-medium'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-lime-500 text-white font-bold">N</span>
            <div>
              <p className="font-bold leading-tight">Nikky Fruits & Veggies</p>
              <p className="text-xs text-slate-500 -mt-0.5">Freshness delivered</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link className={navLink} to="/">Home</Link>
            <Link className={navLink} to="/fruits">Fruits</Link>
            <Link className={navLink} to="/vegetables">Vegetables</Link>
            <Link className={navLink} to="/hampers">Fruit Hampers</Link>
            <Link className={navLink} to="/honey">Ginger & Turmeric Honey</Link>
            <Link className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700" to="/order">Order</Link>
          </nav>
          <details className="md:hidden">
            <summary className="px-3 py-2 rounded-md border border-slate-300 cursor-pointer">Menu</summary>
            <div className="absolute right-4 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 p-3 flex flex-col gap-2">
              <Link className={navLink} to="/">Home</Link>
              <Link className={navLink} to="/fruits">Fruits</Link>
              <Link className={navLink} to="/vegetables">Vegetables</Link>
              <Link className={navLink} to="/hampers">Fruit Hampers</Link>
              <Link className={navLink} to="/honey">Ginger & Turmeric Honey</Link>
              <Link className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 text-center" to="/order">Order</Link>
            </div>
          </details>
        </div>
      </header>

      {children}

      <footer className="mt-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-bold">{SITE.name}</p>
            <p className="text-sm text-slate-600">Owned by {SITE.owner}</p>
            <p className="text-sm text-slate-600 mt-2">We deliver fresh fruits, veggies, custom hampers, and infused honey.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Contact</p>
            <p className="text-sm">Email: <a className="text-green-700 hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p className="text-sm">Phone: <a className="text-green-700 hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
            <p className="text-sm">WhatsApp: <a className="text-green-700 hover:underline" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">Chat now</a></p>
          </div>
          <div>
            <p className="font-semibold mb-2">Follow & Order</p>
            <div className="flex gap-3">
              <a href={`https://wa.me/${SITE.whatsapp}`} className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700" target="_blank" rel="noreferrer">WhatsApp</a>
              <a href={`mailto:${SITE.email}`} className="px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800">Email</a>
              <Link to="/order" className="px-4 py-2 rounded-full border border-slate-300 hover:border-slate-400">Book Delivery</Link>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} {SITE.name}</div>
      </footer>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_500px_at_10%_-10%,rgba(34,197,94,0.15),transparent),radial-gradient(1000px_500px_at_90%_110%,rgba(132,204,22,0.15),transparent)]" />
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">Fresh Fruits, Veggies & Hampers</h1>
          <p className="mt-4 text-lg text-slate-700">Bananas, apples, grapes, pineapples, oranges, peaches, and more. Broccoli, spinach, onions, cucumbers, lettuce and a full range of seasonal vegetables. Plus ginger & turmeric infused honey.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/order" className="px-5 py-3 rounded-full bg-green-600 text-white hover:bg-green-700">Book a Delivery</Link>
            <Link to="/hampers" className="px-5 py-3 rounded-full border border-slate-300 hover:border-slate-400">View Hampers</Link>
          </div>
          <div className="mt-4 text-sm text-slate-600">We deliver across town. Chat on WhatsApp or email us anytime.</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="rounded-xl h-48 md:h-64 w-full object-cover" src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop" alt="Fruit assortment" />
          <img className="rounded-xl h-48 md:h-64 w-full object-cover" src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1200&auto=format&fit=crop" alt="Vegetables" />
          <img className="rounded-xl h-48 md:h-64 w-full object-cover" src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1200&auto=format&fit=crop" alt="Grapes" />
          <img className="rounded-xl h-48 md:h-64 w-full object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop" alt="Green veggies" />
        </div>
      </div>
    </section>
  )
}

function Grid({ title, items }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-slate-200 overflow-hidden group">
            <img src={it.image} alt={it.title} className="h-44 w-full object-cover group-hover:scale-[1.02] transition" />
            <div className="p-4">
              <p className="font-semibold">{it.title}</p>
              {it.price && <p className="text-sm text-slate-600">{it.price}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Hampers() {
  const tiers = [
    { price: '$15', desc: 'Small selection of seasonal fruits' },
    { price: '$20', desc: 'Medium hamper with variety for 2-3 people' },
    { price: '$25', desc: 'Family hamper with premium picks' },
    { price: '$30', desc: 'Celebration hamper, best value' },
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold">Fruit Hampers</h2>
      <p className="text-slate-600 mt-2">Perfect for gifts, events, or weekly refresh.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {tiers.map(t => (
          <div key={t.price} className="rounded-2xl border border-slate-200 p-5 flex flex-col">
            <p className="text-3xl font-extrabold text-green-700">{t.price}</p>
            <p className="text-sm text-slate-600 mt-1">{t.desc}</p>
            <Link to="/order" className="mt-auto inline-block text-center px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700">Order</Link>
          </div>
        ))}
      </div>
    </section>
  )
}

function Honey() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
      <img className="rounded-2xl w-full h-72 object-cover" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Infused honey" />
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">Ginger & Turmeric Infused Honey</h2>
        <p className="text-slate-700 mt-2">A soothing, immune-boosting blend of pure honey infused with fresh ginger and turmeric. Great for tea, cooking, or a healthy spoonful daily.</p>
        <div className="mt-4 flex gap-3">
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi Nikky, I want to order infused honey.')}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700">WhatsApp to Order</a>
          <a href={`mailto:${SITE.email}?subject=${encodeURIComponent('Order: Ginger & Turmeric Honey')}`} className="px-4 py-2 rounded-full border border-slate-300 hover:border-slate-400">Email Us</a>
        </div>
      </div>
    </section>
  )
}

function ContactOrder() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    customer_name: '',
    phone: '',
    email: '',
    items: '',
    delivery_date: '',
    delivery_address: '',
    notes: '',
    contact_method: 'whatsapp',
  })
  const [status, setStatus] = useState({ loading: false, error: '', ok: false })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, error: '', ok: false })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = {
        ...form,
        items: form.items.split(',').map(s => s.trim()).filter(Boolean),
        delivery_date: form.delivery_date,
      }
      const res = await fetch(`${baseUrl}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ loading: false, error: '', ok: true })
      navigate('/order/success')
    } catch (err) {
      setStatus({ loading: false, error: err.message || 'Error', ok: false })
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold">Book a Delivery</h2>
      <p className="text-slate-600 mt-2">Choose your items and a delivery date. We will confirm on your preferred contact method.</p>
      <form onSubmit={submit} className="mt-6 grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input required placeholder="Full name" className="input" value={form.customer_name} onChange={e=>setForm({ ...form, customer_name: e.target.value })} />
          <input required placeholder="Phone / WhatsApp" className="input" value={form.phone} onChange={e=>setForm({ ...form, phone: e.target.value })} />
        </div>
        <input type="email" placeholder="Email (optional)" className="input" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} />
        <textarea required placeholder="Items (comma separated) e.g. bananas, apples, spinach" className="input min-h-[110px]" value={form.items} onChange={e=>setForm({ ...form, items: e.target.value })} />
        <div className="grid md:grid-cols-2 gap-4">
          <input required type="date" className="input" value={form.delivery_date} onChange={e=>setForm({ ...form, delivery_date: e.target.value })} />
          <input placeholder="Delivery address" className="input" value={form.delivery_address} onChange={e=>setForm({ ...form, delivery_address: e.target.value })} />
        </div>
        <textarea placeholder="Notes (optional)" className="input min-h-[80px]" value={form.notes} onChange={e=>setForm({ ...form, notes: e.target.value })} />
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-sm"><input type="radio" name="contact" checked={form.contact_method==='whatsapp'} onChange={()=>setForm({ ...form, contact_method: 'whatsapp' })}/> WhatsApp</label>
          <label className="flex items-center gap-2 text-sm"><input type="radio" name="contact" checked={form.contact_method==='email'} onChange={()=>setForm({ ...form, contact_method: 'email' })}/> Email</label>
          <label className="flex items-center gap-2 text-sm"><input type="radio" name="contact" checked={form.contact_method==='phone'} onChange={()=>setForm({ ...form, contact_method: 'phone' })}/> Phone</label>
        </div>
        <div className="flex flex-wrap gap-3">
          <button disabled={status.loading} className="px-5 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 disabled:opacity-60">{status.loading ? 'Submitting...' : 'Submit Order'}</button>
          <a className="px-5 py-3 rounded-full border border-slate-300 hover:border-slate-400" href={`mailto:${SITE.email}?subject=${encodeURIComponent('New order request')}`}>Email Us</a>
          <a className="px-5 py-3 rounded-full border border-slate-300 hover:border-slate-400" href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi Nikky, I want to place an order.')}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        {status.error && <p className="text-red-600 text-sm">{status.error}</p>}
      </form>
    </section>
  )
}

function OrderSuccess() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-24 text-center">
      <div className="mx-auto w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-2xl">✓</div>
      <h2 className="text-2xl md:text-3xl font-bold mt-4">Order received</h2>
      <p className="text-slate-600 mt-2">Thank you! We will reach out shortly to confirm your delivery.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link to="/" className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700">Back Home</Link>
        <a href={`https://wa.me/${SITE.whatsapp}`} className="px-4 py-2 rounded-full border border-slate-300" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
      </div>
    </section>
  )
}

function Home() {
  const fruits = [
    { title: 'Bananas', image: 'https://images.unsplash.com/photo-1571772805064-207c8435df79?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Apples', image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Grapes', image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Pineapples', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Oranges', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Peaches', image: 'https://images.unsplash.com/photo-1640958900081-7b069dd23e9c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYW5hbmFzfGVufDB8MHx8fDE3NjM0NjkxMzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ]
  const veggies = [
    { title: 'Broccoli', image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Spinach', image: 'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmFuZ2VzfGVufDB8MHx8fDE3NjM0NjkxMzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'Onions', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Cucumbers', image: 'https://images.unsplash.com/photo-1614336215203-05a588f74627?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcm9jY29saXxlbnwwfDB8fHwxNzYzNDY5MTM2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'Lettuce', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop' },
    { title: 'More Veg', image: 'https://images.unsplash.com/photo-1614336215203-05a588f74627?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcm9jY29saXxlbnwwfDB8fHwxNzYzNDY5MTM2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ]
  return (
    <>
      <Hero />
      <Grid title="Popular Fruits" items={fruits} />
      <Grid title="Fresh Vegetables" items={veggies} />
      <Hampers />
      <Honey />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="rounded-2xl bg-gradient-to-br from-green-600 to-lime-600 p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-2xl md:text-3xl font-extrabold">Delivery available</p>
            <p className="opacity-90">Book your preferred date and we handle the rest.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/order" className="px-5 py-3 rounded-full bg-white text-green-700 hover:bg-white/90">Book a Delivery</Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full border border-white/70 hover:bg-white/10">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}

function FruitsPage() {
  const items = [
    'Bananas','Apples','Grapes','Pineapples','Oranges','Peaches','Mangoes','Strawberries'
  ].map(name => ({ title: name, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop' }))
  return <Grid title="Fruits" items={items} />
}

function VegetablesPage() {
  const items = ['Broccoli','Spinach','Onions','Cucumbers','Lettuce','Tomatoes','Carrots','Peppers']
    .map(name => ({ title: name, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop' }))
  return <Grid title="Vegetables" items={items} />
}

export default function App() {
  return (
    <Layout>
      <style>{`.input{padding:0.75rem 1rem;border-radius:0.75rem;border:1px solid rgb(226 232 240);outline:none} .input:focus{border-color:rgb(22 163 74)}`}</style>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruits" element={<FruitsPage />} />
        <Route path="/vegetables" element={<VegetablesPage />} />
        <Route path="/hampers" element={<Hampers />} />
        <Route path="/honey" element={<Honey />} />
        <Route path="/order" element={<ContactOrder />} />
        <Route path="/order/success" element={<OrderSuccess />} />
      </Routes>
    </Layout>
  )
}

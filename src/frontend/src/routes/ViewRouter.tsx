import { Routes, Route } from 'react-router-dom';

import { Home, History, HM, SHR } from '../views';

export default function ViewRouter() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/history" Component={History} />
      <Route path="/hm" Component={HM} />
      <Route path="/shr" Component={SHR} />
    </Routes>
  );
}

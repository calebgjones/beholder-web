import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar/navigationBar.jsx'
import HomePage from './components/HomePage/homePage.jsx'
import ApplicationMain from './components/Modules/Application/applicationMain.jsx'
import PartsMain from './components/Modules/Parts/partsMain.jsx'
import ServiceMain from './components/Modules/Service/serviceMain.jsx'
import SalesMain from './components/Modules/Sales/salesMain.jsx'
import RentalMain from './components/Modules/Rental/rentalMain.jsx'
import ManagementActivityMain from './components/Modules/ManagementActivity/managementActivityMain.jsx'
import ReceivablesMain from './components/Modules/Receivables/receivablesMain.jsx'
import PayablesMain from './components/Modules/Payables/payablesMain.jsx'
import GeneralLedgerMain from './components/Modules/GeneralLedger/generalLedgerMain.jsx'
import PayrollMain from './components/Modules/Payroll/payrollMain.jsx'
import SystemMain from './components/Modules/System/systemMain.jsx'
import HelpMain from './components/Modules/Help/helpMain.jsx'
import MoreMain from './components/Modules/More/moreMain.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Application Routes */}
      <Route path="/application" element={<ApplicationMain />} />
      <Route path="/application/view" element={<ApplicationMain />} />
      <Route path="/application/recent-documents" element={<ApplicationMain />} />
      <Route path="/application/recent-reports" element={<ApplicationMain />} />
      <Route path="/application/toggle-low-resolution-scrolling" element={<ApplicationMain />} />
      <Route path="/application/close-all-unpinned" element={<ApplicationMain />} />
      <Route path="/application/close-all" element={<ApplicationMain />} />
      <Route path="/application/switch-store" element={<ApplicationMain />} />
      <Route path="/application/lock-screen" element={<ApplicationMain />} />

      {/* Parts Routes */}
      <Route path="/parts" element={<PartsMain />} />
      <Route path="/parts/parts-invoice" element={<PartsMain />} />
      <Route path="/parts/parts-inventory" element={<PartsMain />} />
      <Route path="/parts/ordering" element={<PartsMain />} />
      <Route path="/parts/receiving" element={<PartsMain />} />
      <Route path="/parts/special-orders" element={<PartsMain />} />
      <Route path="/parts/supplier-returns" element={<PartsMain />} />
      <Route path="/parts/shipping-inquiry" element={<PartsMain />} />
      <Route path="/parts/parts-transfer" element={<PartsMain />} />
      <Route path="/parts/cashiering" element={<PartsMain />} />
      <Route path="/parts/cashiering/miscellaneous-receipt" element={<PartsMain />} />
      <Route path="/parts/cashiering/paid-out" element={<PartsMain />} />
      <Route path="/parts/cashiering/special-order-deposit" element={<PartsMain />} />
      <Route path="/parts/cashiering/reprint-misc-invoice" element={<PartsMain />} />
      <Route path="/parts/cashiering/reprint-part-invoice" element={<PartsMain />} />
      <Route path="/parts/inventory-updating" element={<PartsMain />} />
      <Route path="/parts/inventory-updating/update-part-prices-using-escalators" element={<PartsMain />} />
      <Route path="/parts/inventory-updating/part-number-utility" element={<PartsMain />} />
      <Route path="/parts/inventory-updating/scanned-inventory" element={<PartsMain />} />
      <Route path="/parts/inventory-updating/inventory-count-sheets" element={<PartsMain />} />
      <Route path="/parts/inventory-updating/change-part-categories" element={<PartsMain />} />
      <Route path="/parts/lists" element={<PartsMain />} />
      <Route path="/parts/lists/part-escalators" element={<PartsMain />} />
      <Route path="/parts/lists/price-books" element={<PartsMain />} />
      <Route path="/parts/lists/suppliers" element={<PartsMain />} />
      <Route path="/parts/lists/purchase-orders" element={<PartsMain />} />
      <Route path="/parts/lists/epc-suppliers" element={<PartsMain />} />
      <Route path="/parts/lists/part-labels" element={<PartsMain />} />
      <Route path="/parts/lists/order-types" element={<PartsMain />} />
      <Route path="/parts/lists/part-adjustment-types" element={<PartsMain />} />
      <Route path="/parts/lists/web-commerce-tax" element={<PartsMain />} />
      <Route path="/parts/lists/web-commerce-methods-of-payment" element={<PartsMain />} />
      <Route path="/parts/lists/shipping-carriers" element={<PartsMain />} />
      <Route path="/parts/lists/supplier-purchase-orders" element={<PartsMain />} />
      <Route path="/parts/lists/part-kits" element={<PartsMain />} />
      <Route path="/parts/reports" element={<PartsMain />} />
      <Route path="/parts/reports/auto-escalator-report" element={<PartsMain />} />
      <Route path="/parts/reports/count-sheet-report" element={<PartsMain />} />
      <Route path="/parts/reports/inventory-update-validation" element={<PartsMain />} />
      <Route path="/parts/reports/lightspeed-industry-benchmarks" element={<PartsMain />} />
      <Route path="/parts/reports/parts-adjustment-report" element={<PartsMain />} />
      <Route path="/parts/reports/top-selling-parts" element={<PartsMain />} />
      <Route path="/parts/reports/supersession-loops" element={<PartsMain />} />
      <Route path="/parts/part-invoice-analysis" element={<PartsMain />} />
      <Route path="/parts/web-order-log" element={<PartsMain />} />

      {/* Service Routes */}
      <Route path="/service" element={<ServiceMain />} />
      <Route path="/service/new-estimate" element={<ServiceMain />} />
      <Route path="/service/new-repair-order" element={<ServiceMain />} />
      <Route path="/service/new-ro-for-major-unit" element={<ServiceMain />} />
      <Route path="/service/estimates-and-repair-orders" element={<ServiceMain />} />
      <Route path="/service/update-labor-paid" element={<ServiceMain />} />
      <Route path="/service/technician-time-entry" element={<ServiceMain />} />
      <Route path="/service/old-service-scheduler" element={<ServiceMain />} />
      <Route path="/service/service-schedule-summary" element={<ServiceMain />} />
      <Route path="/service/service-scheduler-w-calendar" element={<ServiceMain />} />
      <Route path="/service/warranty-claims" element={<ServiceMain />} />
      <Route path="/service/imported-repair-orders" element={<ServiceMain />} />
      <Route path="/service/lists" element={<ServiceMain />} />
      <Route path="/service/lists/bulletins" element={<ServiceMain />} />
      <Route path="/service/lists/ro-categories" element={<ServiceMain />} />
      <Route path="/service/lists/flat-rates" element={<ServiceMain />} />
      <Route path="/service/lists/form-batches" element={<ServiceMain />} />
      <Route path="/service/lists/labor-rates" element={<ServiceMain />} />
      <Route path="/service/lists/service-follow-up-chains" element={<ServiceMain />} />
      <Route path="/service/lists/standard-jobs" element={<ServiceMain />} />
      <Route path="/service/lists/technicians" element={<ServiceMain />} />
      <Route path="/service/reports" element={<ServiceMain />} />

      {/* Sales Routes */}
      <Route path="/sales" element={<SalesMain />} />
      <Route path="/sales/sales-quotes" element={<SalesMain />} />
      <Route path="/sales/sales-orders" element={<SalesMain />} />

      {/* Rental Routes */}
      <Route path="/rental" element={<RentalMain />} />
      <Route path="/rental/new-rental-contract" element={<RentalMain />} />

      {/* Management Activity Routes */}
      <Route path="/management-activity" element={<ManagementActivityMain />} />
      <Route path="/management-activity/dashboard" element={<ManagementActivityMain />} />

      {/* Receivables Routes */}
      <Route path="/receivables" element={<ReceivablesMain />} />
      <Route path="/receivables/customer-invoices" element={<ReceivablesMain />} />

      {/* Payables Routes */}
      <Route path="/payables" element={<PayablesMain />} />
      <Route path="/payables/vendor-bills" element={<PayablesMain />} />

      {/* General Ledger Routes */}
      <Route path="/general-ledger" element={<GeneralLedgerMain />} />
      <Route path="/general-ledger/chart-of-accounts" element={<GeneralLedgerMain />} />

      {/* Payroll Routes */}
      <Route path="/payroll" element={<PayrollMain />} />
      <Route path="/payroll/employee-records" element={<PayrollMain />} />

      {/* System Routes */}
      <Route path="/system" element={<SystemMain />} />
      <Route path="/system/user-management" element={<SystemMain />} />

      {/* Help Routes */}
      <Route path="/help" element={<HelpMain />} />
      <Route path="/help/about" element={<HelpMain />} />
      <Route path="/help/remote-support-assistance" element={<HelpMain />} />
      <Route path="/help/system-info" element={<HelpMain />} />
      <Route path="/help/admin-utilities" element={<HelpMain />} />
      <Route path="/help/development-settings" element={<HelpMain />} />

      {/* More Routes */}
      <Route path="/more" element={<MoreMain />} />
      <Route path="/more/cashiering-global-perms" element={<MoreMain />} />
      <Route path="/more/reporting" element={<MoreMain />} />
      <Route path="/more/reporting/custom-reports-repository" element={<MoreMain />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import { Invoice } from "./definitions";

export const mockRevenues = [
  {
    id: "6d29413c-77a8-4623-6757-1a2c796dfe09",
    month: "Apr",
    revenue: 16720,
  },
  {
    id: "62f94fbe-d0f8-46e0-e06e-9dd9cf7ba2b2",
    month: "May",
    revenue: 41940,
  },
  {
    id: "15d2c3b5-d850-49e2-5468-054ba1377498",
    month: "Jun",
    revenue: 30323,
  },
  {
    id: "d5737e8c-6d31-4771-1895-e38832164467",
    month: "Jul",
    revenue: 21612,
  },
  {
    id: "fe401300-1256-4d2c-2e40-6499006f032d",
    month: "Aug",
    revenue: 38013,
  },
  {
    id: "b0191bac-9769-4173-c07a-13c14211fd7e",
    month: "Sep",
    revenue: 53989,
  },
  {
    id: "df0e9371-4317-4a31-4f37-6898cfd69a37",
    month: "Oct",
    revenue: 43539,
  },
  {
    id: "a31a230a-e66f-44b3-3dec-3828ce9971bc",
    month: "Nov",
    revenue: 26158,
  },
  {
    id: "6a0d8026-5322-4061-616c-a36bbc84aa9b",
    month: "Dec",
    revenue: 74986,
  },
  {
    id: "8895460e-2bd8-4ee2-a076-c733d76da8a7",
    month: "Jan",
    revenue: 77227,
  },
  {
    id: "cd2dc1ee-75a2-4150-7452-f40e6b31a26e",
    month: "Feb",
    revenue: 17957,
  },
  {
    id: "95194a7a-1b13-481d-af04-b3ba4d39a233",
    month: "Mar",
    revenue: 29792,
  },
];

export const mockLatestInvoices = [
  {
    id: "b5bb49a8-ea6d-444f-6811-a3631a85cd0d",
    name: "Rodrigo Budnik",
    email: "achievable_edwar@libero.it",
    amount: 1693,
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "027d5e97-12b7-49dc-71f9-9eabb3ac8b06",
    name: "Leaann Daws",
    email: "tickling_krishang@gmail.com",
    amount: 1662,
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "c96cea2b-34e0-4477-8dfd-44cbc6e4e236",
    name: "Zoya Westerhold",
    email: "achievable_madilynn@ymail.com",
    amount: 7899,
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "154b0d34-6da2-40f0-84ca-614f316e502e",
    name: "Rashaunda Keahey",
    email: "gaudy_alhaji@wanadoo.fr",
    amount: "8052",
    image_url: "/customers/balazs-orban.png",
  },
  {
    id: "975afc7f-cef4-41df-d538-1fe47dfb3559",
    name: "Genessy Brands",
    email: "numeric_colden@ymail.com",
    amount: 8382,
    image_url: "/customers/evil-rabbit.png",
  },
];

export const mockFilteredInvoices = [
  {
    id: "b5bb49a8-ea6d-444f-6811-a3631a85cd0d",
    amount: 1693,
    date: "2028-05-05",
    status: "paid",
    name: "Rodrigo Budnik",
    email: "achievable_edwar@libero.it",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "027d5e97-12b7-49dc-71f9-9eabb3ac8b06",
    amount: 1662,
    date: "2028-04-09",
    status: "pending",
    name: "Leaann Daws",
    email: "tickling_krishang@gmail.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "c96cea2b-34e0-4477-8dfd-44cbc6e4e236",
    amount: 7899,
    date: "2028-03-29",
    status: "paid",
    name: "Zoya Westerhold",
    email: "achievable_madilynn@ymail.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "154b0d34-6da2-40f0-84ca-614f316e502e",
    amount: 8052,
    date: "2028-03-27",
    status: "pending",
    name: "Rashaunda Keahey",
    email: "gaudy_alhaji@wanadoo.fr",
    image_url: "/customers/balazs-orban.png",
  },
  {
    id: "975afc7f-cef4-41df-d538-1fe47dfb3559",
    amount: 8382,
    date: "2028-03-23",
    status: "pending",
    name: "Genessy Brands",
    email: "numeric_colden@ymail.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "389ef3dd-c9eb-481c-35c4-42b77b7e44af",
    amount: 1322,
    date: "2028-02-16",
    status: "paid",
    name: "Gurjot Eilers",
    email: "unfavorable_jennine@ymail.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "5fe046e3-c4cd-463d-7b47-bc1e361e574e",
    amount: 1832,
    date: "2028-01-30",
    status: "paid",
    name: "Brielle Worthy",
    email: "unquestioned_francesc@rediffmail.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "d3ea13f7-4596-4ccb-c417-249e31785b94",
    amount: 3383,
    date: "2028-01-29",
    status: "paid",
    name: "Lendora Claros",
    email: "unfocused_elvia@yahoo.com.br",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "9de8022f-efbe-4fc7-08b8-ade83365b0b5",
    amount: 4725,
    date: "2027-12-31",
    status: "paid",
    name: "Penni Degraaf",
    email: "unflattering_gevork@live.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "e9109614-ad11-4db4-1f17-ac35341b1f62",
    amount: 4641,
    date: "2027-12-25",
    status: "paid",
    name: "Leaann Daws",
    email: "tickling_krishang@gmail.com",
    image_url: "/customers/michael-novotny.png",
  },
];

export const mockInvoiceById: Invoice[] = [{
  id: "e9109614-ad11-4db4-1f17-ac35341b1f62",
  customer_id: "26c193f4-eb91-4c1a-419c-6d89d040e851",
  amount: 4641,
  date: "2027-12-25",
  status: "paid",
}];

export const mockAllCustomers = [
  {
    id: "fdb04071-56f8-4d4c-1139-494278bb8c12",
    name: "Ailene Bonds",
    email: "worrisome_rasheda@rediffmail.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "26c193f4-eb91-4c1a-419c-6d89d040e851",
    name: "Alleigh Stiehl",
    email: "bankable_ishmael@orange.fr",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "f0c22e9e-5f83-4331-c376-ac46c5c32f70",
    name: "Althia Ureta",
    email: "automatic_denell@yahoo.fr",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "5de24fdd-58cb-4cb8-bb73-5853d335df17",
    name: "Amberlie Marolf",
    email: "achievable_avyan@yahoo.co.in",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "0b2579ff-4049-42c8-f8e8-c6acbefa12db",
    name: "Angello Buddenhagen",
    email: "applicable_jayse@yahoo.com.br",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "dfc32f87-cfcb-45d9-36ab-e4ccd306cc20",
    name: "An Gritton",
    email: "revengeful_diavian@yahoo.co.uk",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "a9ed0052-d0ad-4c7c-13b9-8308bc74ca0e",
    name: "Anshul Vanwagenen",
    email: "unfathomable_fayrene@orange.fr",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "f20a91c7-c3a1-4225-2ae4-4923cec74598",
    name: "Antha Sweis",
    email: "unenforceable_khamila@aol.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "a430ebae-41fb-4c23-8dd6-6148615ab0fc",
    name: "Antwaine Felice",
    email: "zestful_kyson@live.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "dfa1fab3-e625-4616-e77c-c764b7801484",
    name: "Aquil Cesario",
    email: "inconsiderate_kaitlan@hotmail.co.uk",
    image_url: "/customers/lee-robinson.png",
  },
];

export const mockFormCustomers = [
  {
    id: "fdb04071-56f8-4d4c-1139-494278bb8c12",
    name: "Ailene Bonds",
  },
  {
    id: "26c193f4-eb91-4c1a-419c-6d89d040e851",
    name: "Alleigh Stiehl",
  },
  {
    id: "f0c22e9e-5f83-4331-c376-ac46c5c32f70",
    name: "Althia Ureta",
  },
  {
    id: "5de24fdd-58cb-4cb8-bb73-5853d335df17",
    name: "Amberlie Marolf",
  },
  {
    id: "0b2579ff-4049-42c8-f8e8-c6acbefa12db",
    name: "Angello Buddenhagen",
  },
  {
    id: "dfc32f87-cfcb-45d9-36ab-e4ccd306cc20",
    name: "An Gritton",
  },
  {
    id: "a9ed0052-d0ad-4c7c-13b9-8308bc74ca0e",
    name: "Anshul Vanwagenen",
  },
  {
    id: "f20a91c7-c3a1-4225-2ae4-4923cec74598",
    name: "Antha Sweis",
  },
  {
    id: "a430ebae-41fb-4c23-8dd6-6148615ab0fc",
    name: "Antwaine Felice",
  },
  {
    id: "dfa1fab3-e625-4616-e77c-c764b7801484",
    name: "Aquil Cesario",
  },
];

export const mockFilteredCustomersTable = [
  {
    id: "fdb04071-56f8-4d4c-1139-494278bb8c12",
    name: "Ailene Bonds",
    email: "worrisome_rasheda@rediffmail.com",
    image_url: "/customers/evil-rabbit.png",
    total_invoices: 1,
    total_pending: 0,
    total_paid: 3506,
  },
  {
    id: "26c193f4-eb91-4c1a-419c-6d89d040e851",
    name: "Alleigh Stiehl",
    email: "bankable_ishmael@orange.fr",
    image_url: "/customers/michael-novotny.png",
    total_invoices: 0,
    total_pending: 0,
    total_paid: 0,
  },
  {
    id: "f0c22e9e-5f83-4331-c376-ac46c5c32f70",
    name: "Althia Ureta",
    email: "automatic_denell@yahoo.fr",
    image_url: "/customers/delba-de-oliveira.png",
    total_invoices: 2,
    total_pending: 8814,
    total_paid: 5226,
  },
  {
    id: "5de24fdd-58cb-4cb8-bb73-5853d335df17",
    name: "Amberlie Marolf",
    email: "achievable_avyan@yahoo.co.in",
    image_url: "/customers/michael-novotny.png",
    total_invoices: 1,
    total_pending: 8898,
    total_paid: 0,
  },
  {
    id: "0b2579ff-4049-42c8-f8e8-c6acbefa12db",
    name: "Angello Buddenhagen",
    email: "applicable_jayse@yahoo.com.br",
    image_url: "/customers/evil-rabbit.png",
    total_invoices: 1,
    total_pending: 0,
    total_paid: 3390,
  },
  {
    id: "dfc32f87-cfcb-45d9-36ab-e4ccd306cc20",
    name: "An Gritton",
    email: "revengeful_diavian@yahoo.co.uk",
    image_url: "/customers/amy-burns.png",
    total_invoices: 3,
    total_pending: 1803,
    total_paid: 7797,
  },
  {
    id: "a9ed0052-d0ad-4c7c-13b9-8308bc74ca0e",
    name: "Anshul Vanwagenen",
    email: "unfathomable_fayrene@orange.fr",
    image_url: "/customers/evil-rabbit.png",
    total_invoices: 1,
    total_pending: 5165,
    total_paid: 0,
  },
  {
    id: "f20a91c7-c3a1-4225-2ae4-4923cec74598",
    name: "Antha Sweis",
    email: "unenforceable_khamila@aol.com",
    image_url: "/customers/lee-robinson.png",
    total_invoices: 1,
    total_pending: 0,
    total_paid: 7740,
  },
  {
    id: "a430ebae-41fb-4c23-8dd6-6148615ab0fc",
    name: "Antwaine Felice",
    email: "zestful_kyson@live.com",
    image_url: "/customers/evil-rabbit.png",
    total_invoices: 4,
    total_pending: 18671,
    total_paid: 7767,
  },
  {
    id: "dfa1fab3-e625-4616-e77c-c764b7801484",
    name: "Aquil Cesario",
    email: "inconsiderate_kaitlan@hotmail.co.uk",
    image_url: "/customers/lee-robinson.png",
    total_invoices: 2,
    total_pending: 11065,
    total_paid: 0,
  },
];

export const mockCustomerById = {
  id: "dfa1fab3-e625-4616-e77c-c764b7801484",
  name: "Aquil Cesario",
  email: "inconsiderate_kaitlan@hotmail.co.uk",
  image_url: "/customers/lee-robinson.png",
  invoices: [
    {
      id: "bd92c225-ef6e-4294-ebfa-15de0bb518b5",
      date: "2020-06-22",
      amount: 7268,
      status: "pending",
      customer_id: "dfa1fab3-e625-4616-e77c-c764b7801484",
    },
    {
      id: "bc7f61ba-3a33-485c-bd8e-b2784ce5c7c1",
      date: "2020-08-30",
      amount: 3797,
      status: "pending",
      customer_id: "dfa1fab3-e625-4616-e77c-c764b7801484",
    },
    {
      id: "b37f61bc-3a3e-485c-ba8e-b2784ee5c4a2",
      date: "2020-09-21",
      amount: 2799,
      status: "paid",
      customer_id: "dfa1fab3-e625-4616-e77c-c764b7801484",
    },
  ],
};

export const mockPendingCustomerInvoices = [
  {
    id: "bd92c225-ef6e-4294-ebfa-15de0bb518b5",
    date: "2020-06-22",
    amount: 7268,
    status: "pending",
    customer_id: "dfa1fab3-e625-4616-e77c-c764b7801484",
  },
  {
    id: "b37f61bc-3a3e-485c-ba8e-b2784ee5c4a2",
    date: "2020-08-30",
    amount: 3797,
    status: "pending",
    customer_id: "dfa1fab3-e625-4616-e77c-c764b7801484",
  },
];
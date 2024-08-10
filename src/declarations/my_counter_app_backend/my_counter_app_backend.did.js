export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getCount' : IDL.Func([], [IDL.Nat], ['query']),
    'inc' : IDL.Func([], [IDL.Nat], []),
    'reset' : IDL.Func([], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };

import client as c
import transaction as t
import block as b
import utilities as u

last_block_hash = ""

Dinesh = c.Client()

t0 = t.Transaction (
   "Genesis",
   Dinesh.identity,
   500.0
)

# create block instance
block0 = b.Block()

# init block values
block0.previous_block_hash = None
Nonce = None

# append to verified_transactions
block0.verified_transactions.append(t0)

# has the block and digest the value
digest = hash (block0)
last_block_hash = digest

#
# creating blockchain
# 
TPCoins = []
def dump_blockchain(self):
   print ("Number of blocks in the chain: " + str(len (self)))
   for x in range (len(TPCoins)):
      block_temp = TPCoins[x]
      print ("block # " + str(x))
      for transaction in block_temp.verified_transactions:
         u.display_transaction(transaction)
         print ('--------------')
      print ('=====================================')

#
# Adding block to blockchain
#
# TPCoins.append(block0)
# dump_blockchain(TPCoins)
u.mine("test message", 2)
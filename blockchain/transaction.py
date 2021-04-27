import importwrapper as bc
# transaction class
class Transaction:
   def __init__(self, sender, recipient, value):
      self.sender = sender
      self.recipient = recipient
      self.value = value
      self.time = bc.datetime.datetime.now()
   # convert transaction to dict
   def to_dict(self):
      # if sender is 'Genesis' overide identity, otherwise set identity to senders identity
      if self.sender == "Genesis":
         identity = "Genesis"
      else:
         identity = self.sender.identity

      return bc.collections.OrderedDict({
         'sender': identity,
         'recipient': self.recipient,
         'value': self.value,
         'time' : self.time})
   # sign transactions private and decode to ascii for printing and storing in the blockchain
   def sign_transaction(self):
      private_key = self.sender._private_key
      signer = bc.PKCS1_v1_5.new(private_key)
      h = bc.SHA.new(str(self.to_dict()).encode('utf8'))
      return bc.binascii.hexlify(signer.sign(h)).decode('ascii')
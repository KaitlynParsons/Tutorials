import importwrapper as bc
# client class
class Client:
   def __init__(self):
      random = bc.Crypto.Random.new().read
      self._private_key = bc.RSA.generate(1024, random)
      self._public_key = self._private_key.publickey()
      self._signer = bc.PKCS1_v1_5.new(self._private_key)
   # return public identity of client
   @property
   def identity(self):
      return bc.binascii.hexlify(self._public_key.exportKey(format='DER')).decode('ascii')